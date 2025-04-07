export interface LogoDimensions {
    width: number | string, 
    height: number | string, 
}

export interface LogInFormValues {
    username: string;
    password: string;
  }
  

 export interface Notification {
    created_at: string;
    id: string;
    is_read: boolean;
    message: string;
    updated_at: string;
    user_id: string;
  }