// module.exports = {
//   apps: [{
//     name: 'n8n',
//     script: './packages/cli/bin/n8n',
//     env: {
//       NODE_ENV: 'production',
//       N8N_DISABLED_MODULES: 'insights'
//     }
//   }]
// };

// pm2 start config/ecosystem.config.js --env dev

module.exports = {
	apps: [
		{
			name: 'n8n.dev.icons4u.com.br',
			script: 'packages/cli/bin/n8n',
			watch: false,
			interpreter: 'node@' + require('fs').readFileSync('.nvmrc', 'utf8').trim(),
			env: {
				N8N_DISABLED_MODULES: 'insights',
				NODE_ENV: 'production',
				N8N_LOG_LEVEL: 'debug',
				XN8N_LOG_OUTPUT: 'console,file',
				XN8N_LOG_FILE_LOCATION: "$HOME/.pm2/logs/n8n-out.log",
				DB_LOGGING_ENABLED: true,
				DB_LOGGING_OPTIONS: "error",
				CODE_ENABLE_STDOUT: true,
				GENERIC_TIMEZONE: 'America/Sao_Paulo',
				N8N_HOST: 'n8n.dev.icons4u.com.br',
				N8N_PROTOCOL: 'https',
				XN8N_EDITOR_BASE_URL: 'https://n8n.dev.icons4u.com.br',
				WEBHOOK_URL: 'https://n8n.dev.icons4u.com.br',
				N8N_PROXY_HOPS: 2,
				N8N_PORT: 3102,
				DB_TYPE: 'postgresdb',
				DB_POSTGRESDB_HOST: 'db2.pg.dev.priv.icons4u.com.br',
				DB_POSTGRESDB_PORT: 5432,
				DB_POSTGRESDB_DATABASE: 'n8n_bd',
				DB_POSTGRESDB_USER: 'n8n_usu',
				DB_POSTGRESDB_PASSWORD: process.env.N8N_USU_PASSWORD,
			},
		},
	],
}

