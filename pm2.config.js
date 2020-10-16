module.exports = {
  apps: [
    {
      name: `Ronin-Starter API`,
      script: `./build/server/server.js`,

      // Options reference: https://pm2.keymetrics.io/docs/usage/application-declaration/
      instances: 1,
      autorestart: true,
      watch: false,
      max_memory_restart: `1G`,
      env: {
        NODE_ENV: `production`
      }
    }
  ],

  deploy: {
    production: {
      user: `node`,
      host: `localhost`,
      ref: `origin/master`,
      repo: `git@github.com:repo.git`,
      path: `/var/www/production`,
      "post-deploy": `npm install && pm2 reload ecosystem.config.js --env production`
    }
  }
};
