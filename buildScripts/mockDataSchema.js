export const schema = {
  type: 'object',
  properties: {
    users: {
      type: 'array',
      minItems: 3,
      maxItems: 5,
      items: {
        type: 'object',
        properties: {
          id: {
            type: 'integer',

            minimum: 1,
            maximum: 999999,
          },
          firstName: {
            type: 'string',
            faker: 'name.firstName',
          },
          lastName: {
            type: 'string',
            faker: 'name.lastName',
          },
          email: {
            type: 'string',
            faker: 'internet.email',
          },
        },
        required: ['id', 'firstName', 'lastName', 'email'],
      },
    },
  },
  required: ['users'],
};
