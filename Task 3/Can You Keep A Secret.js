function createSecretHolder(secret) {
  return {
    getSecret: function(){
      return secret;
    },
    setSecret: function(setSecret){
      secret = setSecret;
    }
  }
}
