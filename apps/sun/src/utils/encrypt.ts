import crypto from 'crypto';

const encryptPwd = (password: string, secret: string) => (
  crypto.createHmac('sha256', secret).update(password).digest('hex')
);

export { encryptPwd };
