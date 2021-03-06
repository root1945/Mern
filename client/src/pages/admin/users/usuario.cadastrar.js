import React , { useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Box from '@material-ui/core/Box';
import TextField from '@material-ui/core/TextField';
import Paper from '@material-ui/core/Paper';
import InputLabel from '@material-ui/core/InputLabel';
import MenuItem from '@material-ui/core/MenuItem';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';
//import Badge from '@material-ui/core/Badge';
import Container from '@material-ui/core/Container';
import Grid from '@material-ui/core/Grid';
import MenuAdmin from '../../../components/menu.admin';
import Copyright from '../../../components/footer.admin'
import Button from '@material-ui/core/Button';
import api from '../../../services/api'

const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
  },
  title: {
    flexGrow: 1,
  },
  appBarSpacer: theme.mixins.toolbar,
  content: {
    flexGrow: 1,
    height: '100vh',
    overflow: 'auto',
  },
  container: {
    paddingTop: theme.spacing(4),
    paddingBottom: theme.spacing(4),
  },
  paper: {
    padding: 15,
    display: 'flex',
    overflow: 'auto',
    flexDirection: 'column',
  },
  formControl: {
    width: '100%'
  }
}));

export default function UsuarioCadastrar() {
  const classes = useStyles();
  const [nome, setNome] = useState('');
  const [email, setEmail] = useState('');
  const [senha, setSenha] = useState('');
  const [tipo, setTipo] = useState('');

  async function handleSubmit(){
    const data = {
      name_usuario: nome, 
      email_usuario: email, 
      senha_usuario: senha, 
      tipo_usuario: tipo
    }
    const response = await api.post('/api/usuarios', data)
    if(response.status === 200){
      window.location.href='/admin/usuarios'
    }else {
      alert('Error ao cadastrar!')
    }
  }

  return (
    <div className={classes.root}>
      <MenuAdmin title={'Usuários'} />
      <main className={classes.content}>
        <div className={classes.appBarSpacer} />
        <Container maxWidth="sm" className={classes.container}>
        <h2>Formulário de Cadastro</h2>
        <Paper className={classes.paper}>
        <Grid container spacing={3}>
        <Grid item xs={12} sm={12}>
          <TextField
            required
            id="nome"
            name="nome"
            label="Nome Completo"
            fullWidth
            autoComplete="nome"
            value={nome}
            onChange={e => setNome(e.target.value)}
          />
        </Grid>
        <Grid item xs={12} sm={6}>
          <TextField
            required
            id="email"
            name="email"
            label="Email"
            fullWidth
            autoComplete="email"
            value={email}
            onChange={e => setEmail(e.target.value)}
          />
        </Grid>
        <Grid item xs={12} sm={6}>
        <FormControl className={classes.formControl}>
          <InputLabel id="labelTipo">Tipo</InputLabel>
          <Select
            labelId="labelTipo"
            id="tipo"
            value={tipo}
            onChange={e => setTipo(e.target.value)}
          >
          <MenuItem value={1}>Administrador</MenuItem>
          <MenuItem value={2}>Funcionário</MenuItem>
          </Select>
        </FormControl>
        </Grid>
        <Grid item xs={12} sm={6}>
          <TextField
            type="password"
            required
            id="senha"
            name="senha"
            label="Senha"
            fullWidth
            autoComplete="senha"
            value={senha}
            onChange={e => setSenha(e.target.value)}
          />
        </Grid>
        <Grid item xs={12} sm={12}>
          <Button variant="contained" onClick={handleSubmit} color="primary">
            Salvar
          </Button>
        </Grid>
        </Grid>
        </ Paper>
          <Box pt={4}>
            <Copyright />
          </Box>
        </Container>
      </main>
    </div>
  );
}

