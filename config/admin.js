module.exports = ({ env }) => ({
  auth: {
    secret: env('ADMIN_JWT_SECRET', 'c97835d85a15945bc7cafc6643949b1a'),
  },
});
