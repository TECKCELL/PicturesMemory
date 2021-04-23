import React,{useState,useEffect} from 'react'
import {Container,Grow,Grid} from '@material-ui/core'
import {useDispatch} from 'react-redux'
import Posts from '../posts/Posts'
import {getPosts} from '../../actions/Posts'
import Form from '../Form/Form'
import useStyles from './style'

const Home = () => {

    const classes = useStyles();
    const [currentId,SetCurrentId] = useState(null)
    const dispatch = useDispatch()
    useEffect(() => {
     
        dispatch(getPosts());
       
    }, [dispatch]);


    return (
        <Grow in>
        <Container>
           <Grid className = {classes.mainContainer} container  justify="space-between" alignItems="stretch" spacing = {3}>
               <Grid item xs={12} sm={7}>
               <Posts  SetCurrentId = {SetCurrentId} />
               </Grid>
               <Grid item xs={12} sm={4}>
                   <Form currentId = {currentId} SetCurrentId = {SetCurrentId}/>
                </Grid>
           </Grid>
        </Container>
    </Grow>
    )
}

export default Home
