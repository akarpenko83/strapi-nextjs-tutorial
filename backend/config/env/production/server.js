module.exports = ({ env }) => ({
  url: env('HOST'),
  dirs: {
    public: '/data/public',
  },
});
