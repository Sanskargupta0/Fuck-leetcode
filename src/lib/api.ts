export interface WaitlistData {
  email: string;
  date: string;
  totalCount: number;
}

// Environment variables for API configuration
const BACKEND_API_URL = import.meta.env.VITE_BACKEND_API_URL || 'http://localhost:3000';
// Ensure the API version is set correctly
const API_VERSION = import.meta.env.VITE_API_VERSION || 'v1';

// Validate required environment variables
const validateEnvVars = (): boolean => {
  if (!BACKEND_API_URL) {
    console.error('Missing required environment variable: VITE_BACKEND_API_URL');
    return false;
  }
  
  return true;
};

export const fetchWaitlistCount = async (): Promise<number> => {
  try {
    if (!validateEnvVars()) {
      console.error('Environment variables not configured properly');
      return 0;
    }

    const response = await fetch(`${BACKEND_API_URL}/api/${API_VERSION}/waitlist/count` );

    if (!response.ok) {
      throw new Error('Failed to fetch waitlist count');
    }
    
    const data = await response.json();
    
    // Handle response structure: { success: true, data: { count: number }, message: string }
    if (data.success && data.data && typeof data.data.count === 'number') {
      return data.data.count;
    }
    
    // Fallback for direct count structure
    return data.count || 0;
  } catch (error) {
    console.error('Error fetching waitlist count:', error);
    return 0; // Return 0 as fallback
  }
};

export interface WaitlistResponse {
  success: boolean;
  message?: string;
  error?: {
    statusCode: number;
    status: string;
    isOperational: boolean;
  };
}

export const addToWaitlist = async (email: string): Promise<WaitlistResponse> => {
  try {
    if (!validateEnvVars()) {
      console.error('Environment variables not configured properly');
      return {
        success: false,
        message: 'Environment variables not configured properly'
      };
    }

    const response = await fetch(`${BACKEND_API_URL}/api/${API_VERSION}/waitlist/add`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ email })
    });
    
    const data = await response.json();
    
    if (response.ok) {
      return {
        success: true,
        message: data.message || 'Successfully added to waitlist'
      };
    } else {
      // Handle specific error cases
      if (response.status === 409) {
        return {
          success: false,
          message: data.message || 'This email is already registered in the waitlist',
          error: data.error
        };
      }
      
      return {
        success: false,
        message: data.message || 'Failed to add to waitlist',
        error: data.error
      };
    }
  } catch (error) {
    console.error('Error adding to waitlist:', error);
    return {
      success: false,
      message: 'Network error occurred while adding to waitlist'
    };
  }
};
