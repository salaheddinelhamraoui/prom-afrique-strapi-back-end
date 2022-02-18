module.exports = ({ env }) => ({
  auth: {
    secret: env('ADMIN_JWT_SECRET', '43c17bc04304aa11a792c09be2ab2589'),
  },
});
