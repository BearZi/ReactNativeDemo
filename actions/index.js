const callApi = (data) => {
  return {
    type: 'CALLAPI',
    list: data,
  };
}

export const listenApi = () => {  
  return (dispatch) => {

    fetch('https://discounthero.herokuapp.com/api//v1/brandings/discount_details')  
      .then((response) => {
        return response.json();
      })
      .then((json) => {
        console.log("listenApi = ", json);
        dispatch(callApi(json));
      })
      .catch((err) => {
      });

  }
};
