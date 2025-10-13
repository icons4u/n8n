module.exports = {
	apps: [
		{
			name: 'n8n.dev.icons4u.com.br',
			// starting from npx
			script: 'npx',
			args: 'n8n',
			// starting from the build
			//script: 'packages/cli/bin/n8n',
			watch: false,
			interpreter: 'node@' + require('fs').readFileSync('.nvmrc', 'utf8').trim(),
			env: {
				NODE_ENV: 'production',
				// n8n
				DB_POSTGRESDB_DATABASE: 'n8n_bd',
				DB_POSTGRESDB_HOST: 'db2.pg.dev.priv.icons4u.com.br',
				DB_POSTGRESDB_PASSWORD: process.env.N8N_USU_PASSWORD,
				DB_POSTGRESDB_PORT: 5432,
				DB_POSTGRESDB_USER: 'n8n_usu',
				DB_TYPE: 'postgresdb',
				GENERIC_TIMEZONE: 'America/Sao_Paulo',
				N8N_COOKIE_DOMAIN: 'n8n.dev.icons4u.com.br',
				N8N_EDITOR_BASE_URL: 'https://n8n.dev.icons4u.com.br',
				N8N_ENFORCE_SETTINGS_FILE_PERMISSIONS: true,
				N8N_HOST: 'n8n.dev.icons4u.com.br',
				N8N_PORT: 3102,
				N8N_PROTOCOL: 'https',
				N8N_PROXY_HOPS: 2,
				N8N_RUNNERS_ENABLED: true,
				N8N_USER_FOLDER: '/home/web/n8n.dev.icons4u.com.br',
				WEBHOOK_URL: 'https://n8n.dev.icons4u.com.br',
			},
		},
	],
}

