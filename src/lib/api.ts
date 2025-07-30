export interface WaitlistData {
  "Emails": string;
  "Date": string;
  "Total People": string;
}

export const fetchWaitlistCount = async (): Promise<number> => {
  try {
    const response = await fetch(
      'https://v1.nocodeapi.com/sanskargupta0/google_sheets/kgOstqoPKNmIzwCc?tabId=Emails&row_id=2&fields=Total People&filterValue=Total People'
    );
    
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
    const response = await fetch(
      "https://v1.nocodeapi.com/sanskargupta0/google_sheets/kgOstqoPKNmIzwCc?tabId=Emails",
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify([[email, new Date().toISOString()]])
      }
    );
    
    return response.ok;
  } catch (error) {
    console.error('Error adding to waitlist:', error);
    return false;
  }
};
