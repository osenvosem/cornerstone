export default (env) => {
  // create an error message and throw an error
  // depending on absent agruments and options
  function throwError(forEnv) {
    const internalErrMessage = 'Please provide either "clientServer" or "devProd" argument'
    const envArr = forEnv === 'clientServer' ?
      ['client', 'server'] :
      forEnv === 'devProd' ?
      ['dev', 'prod'] :
      (function () {throw new Error(internalErrMessage)}())
    
    const message = forEnv === 'env' ?
      `Please provide "--env" option.` :
      forEnv === 'clientServer' || forEnv === 'devProd' ?
      `Please provide either --env.${envArr[0]} or --env.${envArr[1]} option.`:
      null;

    throw new Error(message)
  }

  // if there is no --env option provided throw an error
  if (!env) throw new Error(`Please provide '--env' option`)

  // if there is no --env.client/server option provided throw an error
  const clientServer = env.client ? 'client' :
    env.server ? 'server' : 
    throwError('clientServer')

  // if there is no --env.dev/prod option provided throw an error
  const devProd = env.dev ? 'dev' :
    env.prod ? 'prod' :
    throwError('devProd')

  // require and return an appropriate configuration
  return require(`./${clientServer}.${devProd}.babel.js`).default
}

