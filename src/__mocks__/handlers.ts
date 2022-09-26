import { rest } from 'msw';
import { mockUser } from './mock-data/user-list';

export const mockUserApi = rest.get(
  'https://randomuser.me/api/',
  (req, res, ctx) => {
    return res(ctx.json({ ...mockUser }), ctx.delay(150));
  },
);

const handlers = [mockUserApi];

export default handlers;
