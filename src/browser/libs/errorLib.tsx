export function onError(error: { toString: () => any; message: any; }) {
    let message = error.toString();
  
    // Auth errors
    if (!(error instanceof Error) && error.message) {
      message = error.message;
    }
  
    alert(message);
  }