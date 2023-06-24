export class AuthRequiredException extends Error {
  constructor(message = "Auth is required") {
    super(message);
    this.name = "AuthRequiredException";
  }
}
