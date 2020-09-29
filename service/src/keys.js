module.exports  = {
          "sqlConfig" : {
          "port" : process.env.MSSQL_PORT,
          "host" : process.env.MSSQL_HOST,
          "user" : process.env.MSSQL_USER_NAME,
          "password" : process.env.MSSQL_PASSWORD,
          "database" : process.env.MSSQL_DATABASE,
          "name"  : process.env.MSSQL_NAME
          },
          "apiServerConfig" : {
            "host": process.env.API_SERVER_HOST,
            "port": process.env.API_SERVER_PORT,
            "path": process.env.API_SERVER_PATH
          }
};