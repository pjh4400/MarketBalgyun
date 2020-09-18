import React, {useState, useEffect} from 'react';
import axios from 'axios';
import LockOutlinedIcon from '@material-ui/icons/LockOutlined';
import { Container, Paper, Typography, Grid, Button, Avatar, TextField, FormControlLabel, Link, MenuItem} from "@material-ui/core"


import useStyles from './Style';

const SignUpPage = () => {
    const [form, setForm] = useState({
        name: '',
        level: '직원',
        password: '',
        password2: '',
    })
    const classes = useStyles();

    const onChangeHandler = (e) => {
        e.preventDefault();
        setForm({
            ...form,
            [e.target.name] : e.target.value,
        });
    }

    const onSubmitForm = (e) => {
        e.preventDefault();
        if(form.password === form.password2){
            alert('정상적으로 등록되었습니다.');
            axios.post('api/auth/sign-up',{
                name: form.name,
                password: form.password,
                level: form.level,
            })
            .then( (response) => {
                console.log(response);
            })
            .catch( (error) => {
                console.log(error);
            })
        } else {
            alert('비밀번호가 일치하지 않습니다.');
        }
    }

    return (
        <Container className={classes.root}>
            <Paper className={classes.paper}>
                <Typography component="h1" variant="h5">
                <Avatar className={classes.avatar}>
                    <LockOutlinedIcon />
                </Avatar>
                계정 등록
                </Typography>
                <form className={classes.form} noValidate onSubmit={onSubmitForm}>
                    <Grid container spacing={2}>
                        <Grid item xs={12} sm={6}>
                            <TextField
                                name="name"
                                variant="outlined"
                                required
                                fullWidth
                                label="이름"
                                autoFocus
                                onChange={onChangeHandler}
                            />
                        </Grid>

                        <Grid item xs={12} sm={6}>
                            <TextField select label="직책" name="level" defaultValue="직원" variant="outlined"  className={classes.menuitem} onChange={onChangeHandler}>
                                <MenuItem value="직원" >직원</MenuItem>
                                <MenuItem value="팀장">팀장</MenuItem>
                                <MenuItem value="대표">대표</MenuItem>
                                <MenuItem value="아르바이트">아르바이트</MenuItem>
                            </TextField>
                        </Grid>

                        <Grid item xs={12}>
                            <TextField
                                variant="outlined"
                                required
                                fullWidth
                                name="password"
                                label="비밀번호"
                                type="password"
                                onChange={onChangeHandler}
                            />
                        </Grid>
                        <Grid item xs={12}>
                            <TextField
                                variant="outlined"
                                required
                                fullWidth
                                name="password2"
                                label="비밀번호 확인"
                                type="password"
                                onChange={onChangeHandler}
                            />
                        </Grid>
                    </Grid>
                    <Button
                        type="submit"
                        fullWidth
                        variant="contained"
                        color="primary"
                        className={classes.submit}
                    >
                        직원가입
          </Button>
                    <Grid container justify="flex-end">
                        <Grid item>
                            <Link to="/sign-in" variant="body2">
                                <Button className={classes.checkbox}>이미 아이디가 있으신가요? 로그인</Button>
              </Link>
                        </Grid>
                    </Grid>
                </form>
            </Paper>
        </Container>
    );
}



export default SignUpPage;

