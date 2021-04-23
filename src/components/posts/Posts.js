import React from 'react'
import {Grid,CircularProgress} from '@material-ui/core'
import Post from './Post/post.js'
import {useSelector} from 'react-redux'
import useStyles from './style'

 const Posts = ({SetCurrentId}) => {
    const classes = useStyles();
    const posts = useSelector((state)=>state.Posts)
    console.log(posts)
    return (
        
          !posts.length?<CircularProgress/>:
          (
              <Grid className={classes.container} container alignItems= "strech" spacing={3}>
                    {posts.map((post)=>(

                        <Grid key = {post._id} item xs ={12} sm ={6}>

                           <Post post={post} SetCurrentId ={SetCurrentId}></Post>

                        </Grid>
                    ))}

              </Grid>
          )
        
    )
}
export default Posts