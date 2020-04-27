import React from 'react';
import Grid from '@material-ui/core/Grid';
import Sala from './sala';

const sincronizadorStyle = {
  marginLeft: '30px',
  marginTop:'10px',
  height:'35px',
};

// Enum de Status
const statusEnum = {
  NORMAL:1,
  SELECIONADO:2,
  SINCRONIZADO:3
}

// Board
export class Board extends React.Component{
  constructor(props){
    super();
    this.state = {salas: this.selecionarSalas(0)};
  }   

  // Retorna um array com as salas selecionadas
  // As salas até o numero são selecionadas, as demais ficam normais
  selecionarSalas(numero){
    console.log("Selecionando salas...");
    
    var salas = [];

    // Criando parte do array com salas selecionadas
    for(let i = 1; i <= numero; i++){
      salas.push(
        <Sala acao={() => this.setState({salas: this.selecionarSalas(i)})} numeroSala ={(i)} estado={statusEnum.SELECIONADO}/>
      )
    }

    // Completando parte do array com salas normais
    for(let i = numero + 1; i <= 10; i++){
      salas.push(
        <Sala acao={() => this.setState({salas: this.selecionarSalas(i)})} numeroSala ={(i)} estado={statusEnum.NORMAL}/>
      )
    }
    
    return salas;
  }
  
  // Retorna um array com as salas sincronizadas
  sincronizarSalas(){
    console.log("Sincronizando salas...")
    var salas = [];

    for(let i = 1; i <= this.state.salas.length; i++){
      // Se a sala estiver selecionada ou já estiver sincronizada, deixar sincronizada
      if(this.state.salas[i-1].props.estado === statusEnum.SELECIONADO || this.state.salas[i-1].props.estado === statusEnum.SINCRONIZADO){
        salas.push(
          <Sala numeroSala ={(i)} estado={statusEnum.SINCRONIZADO}/>
        )
      }else{
        // Se não, ela não está selecionada, deixá-la normal
        salas.push(
          <Sala numeroSala ={(i)} estado={statusEnum.NORMAL}/>
        )
      }
    }
    return salas;
  }

  render(){
    console.log("Renderizando a Board...")
    console.log("");  
    return(

      <div>

        <Grid onClick={() => {this.setState({salas: this.sincronizarSalas()});} }>
          <button style={sincronizadorStyle}>
            Sincronizar
          </button>
        </Grid>
        
        <br/>

        <Grid container spacing={3} justify="space-evenly">
          {this.state.salas[0]}
          {this.state.salas[1]}
          {this.state.salas[2]}
          {this.state.salas[3]}
          {this.state.salas[4]}
        </Grid>

        <Grid container spacing={3} justify="space-evenly">
          {this.state.salas[5]}
          {this.state.salas[6]}
          {this.state.salas[7]}
          {this.state.salas[8]}
          {this.state.salas[9]}
        </Grid>
      </div>

    )
  }
}

// Classe principal App
export default class App extends React.Component{
  constructor(props){
    super();
  } 
  render(){
    return(
      <div>
      <Board/>
      </div>
    )
  }
}
/*export default function FullWidthGride() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <Grid item xs={2}>
        <button >Sincronizar</button>
      </Grid>
      _+
      <Grid container spacing={3} justify="space-evenly">
        {createRow(classes)};
      </Grid>

      <Grid container spacing={3} justify="space-evenly">
        {createRow(classes,1)};
      </Grid>
    </div>
  );
}*/

