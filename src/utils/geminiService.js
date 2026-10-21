// Client-side service to interact with backend & Gemini API

export async function sendChatMessage(messages, userProfile, userApiKey) {
  try {
    const headers = {
      'Content-Type': 'application/json'
    };
    if (userApiKey) {
      headers['x-gemini-key'] = userApiKey;
    }

    const response = await fetch('/api/chat', {
      method: 'POST',
      headers,
      body: JSON.stringify({
        messages,
        userProfile
      })
    });

    if (!response.ok) {
      const errData = await response.json().catch(() => ({}));
      throw new Error(errData.error || `HTTP error ${response.status}`);
    }

    return await response.json();
  } catch (err) {
    console.error('Chat error:', err);
    throw err;
  }
}

export async function fetchCustomDestinationData(country, city, persona, dietary, faith, userApiKey) {
  try {
    const headers = {
      'Content-Type': 'application/json'
    };
    if (userApiKey) {
      headers['x-gemini-key'] = userApiKey;
    }

    const response = await fetch('/api/generate-custom-city', {
      method: 'POST',
      headers,
      body: JSON.stringify({
        country,
        city,
        persona,
        dietary,
        faith
      })
    });

    return await response.json();
  } catch (err) {
    console.error('Custom city error:', err);
    throw err;
  }
}
