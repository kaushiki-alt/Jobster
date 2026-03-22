export type User = {
  name: string;
  email: string;
  lastName?: string;
  location?: string;
  token?: string;
}

export type UserPayload = {
  name?: string;
  email: string;
  password: string;
}

export type RegisterData = {
  name: string
  email: string
  password: string
  isMember: boolean
}

export type UpdateUserPayload = {
  name: string;
  email: string;
  lastName?: string;
  location?: string;
}