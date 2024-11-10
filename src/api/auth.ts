export const signUp = async (email: string, password: string) => {
  try {
    const response = await fetch('http://localhost:8080/users/create', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ email, password }),
    });

    const data = await response.json();

    if (!response.ok) {
      throw data.details || '알 수 없는 오류가 발생했습니다.';
    }

    return data;
  } catch (error) {
    if (error) {
      throw error;
    }
  }
};

export const signIn = async (email: string, password: string) => {
  try {
    const response = await fetch('http://localhost:8080/users/login', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ email, password }),
    });

    const data = await response.json();

    if (!response.ok) {
      throw data.details || '알 수 없는 오류가 발생했습니다.';
    }

    return data;
  } catch (error) {
    if (error) {
      throw error;
    }
  }
};
