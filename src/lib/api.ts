export interface WaitlistData {
  "Emails": string;
  "Date": string;
  "Total People": string;
}

// Environment variables for API configuration
const NOCODEAPI_BASE_URL = import.meta.env.VITE_NOCODEAPI_BASE_URL;
const NOCODEAPI_API_KEY = import.meta.env.VITE_NOCODEAPI_API_KEY;
const SHEET_TAB_ID = import.meta.env.VITE_SHEET_TAB_ID;
const WAITLIST_ROW_ID = import.meta.env.VITE_WAITLIST_ROW_ID;
const WAITLIST_FIELD = import.meta.env.VITE_WAITLIST_FIELD;
const WAITLIST_FILTER_VALUE = import.meta.env.VITE_WAITLIST_FILTER_VALUE;

// Validate required environment variables
const validateEnvVars = (): boolean => {
  const requiredVars = [
    { name: 'VITE_NOCODEAPI_BASE_URL', value: NOCODEAPI_BASE_URL },
    { name: 'VITE_NOCODEAPI_API_KEY', value: NOCODEAPI_API_KEY },
    { name: 'VITE_SHEET_TAB_ID', value: SHEET_TAB_ID },
    { name: 'VITE_WAITLIST_ROW_ID', value: WAITLIST_ROW_ID },
    { name: 'VITE_WAITLIST_FIELD', value: WAITLIST_FIELD },
    { name: 'VITE_WAITLIST_FILTER_VALUE', value: WAITLIST_FILTER_VALUE }
  ];

  const missingVars = requiredVars.filter(({ value }) => !value);
  
  if (missingVars.length > 0) {
    console.error('Missing required environment variables:', missingVars.map(v => v.name));
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

    const url = `${NOCODEAPI_BASE_URL}/${NOCODEAPI_API_KEY}?tabId=${SHEET_TAB_ID}&row_id=${WAITLIST_ROW_ID}&fields=${encodeURIComponent(WAITLIST_FIELD)}&filterValue=${encodeURIComponent(WAITLIST_FILTER_VALUE)}`;
    
    const response = await fetch(url);
    
    if (!response.ok) {
      throw new Error('Failed to fetch waitlist count');
    }
    
    const data: WaitlistData = await response.json();
    const count = parseInt(data["Total People"]) || 0;
    return count;
  } catch (error) {
    console.error('Error fetching waitlist count:', error);
    return 0; // Return 0 as fallback
  }
};

export const addToWaitlist = async (email: string): Promise<boolean> => {
  try {
    if (!validateEnvVars()) {
      console.error('Environment variables not configured properly');
      return false;
    }

    const url = `${NOCODEAPI_BASE_URL}/${NOCODEAPI_API_KEY}?tabId=${SHEET_TAB_ID}`;
    
    const response = await fetch(url, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify([[email, new Date().toISOString()]])
    });
    
    return response.ok;
  } catch (error) {
    console.error('Error adding to waitlist:', error);
    return false;
  }
};
