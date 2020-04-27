import React from 'react';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';

const normal = '#CCCCCC'; //'#FFD712';
const selecionado = '#4542f5';// '#39D1B4';
const sincronizado = '#11ad00'; //'#00FF00';

const salaStyle = {
  height:'200px',
}
const salaTituloStyle = {
  height:'90%',
  textAlign: 'center',
  paddingTop:'10px',
}

const statusEnum = {
    NORMAL:1,
    SELECIONADO:2,
    SINCRONIZADO:3
}

export default class Sala extends
React.Component{
  constructor(props){
    super(props);
    console.log("Criando Sala...");
  }
  obterCor(estado){
    if(estado === statusEnum.NORMAL){
        return normal;
    }
    if(estado === statusEnum.SELECIONADO){
        return selecionado;
    }
    if(estado === statusEnum.SINCRONIZADO){
        return sincronizado;
    }
  }
  render(){
    return(
        <Grid item xs={2} style={{...{background: this.obterCor(this.props.estado)},...salaStyle}} onClick={this.props.acao}>
            <Paper style={salaTituloStyle}>
                Sala {this.props.numeroSala}
            </Paper>
        </Grid>
    )
  }
}