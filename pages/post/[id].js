import Head from 'next/head'
import Navbar from '../../components/Navbar/Navbar'
import styled from 'styled-components'
import Link from 'next/link'
import Image from 'next/image'
import { useRouter } from 'next/router';
import { useMutation, useQuery } from '@apollo/client'
import { GET_ONE_POST } from '../../graphql/query/post'
import { DELETE_POST } from '../../graphql/mutations/post'

const Container = styled.div`
  max-width: 1110px;
  width: 100%;
  margin: 0 auto;
`

const ContentWrapper = styled.div`
  background: #EEF5FF;
  min-height: 100vh;
  width: 100%;
  padding-bottom: 100px;
`

const BackBtn = styled.p`
  font-style: normal;
  font-weight: 600;
  font-size: 16px;
  line-height: 24px;
  color: #3260A1;
  background: #FFFFFF;
  box-shadow: 0px 10px 25px rgba(148, 174, 213, 0.15);
  border-radius: 10px;
  padding: 10px 15px;
  margin-top: 30px;
  width: 115px;
  cursor: pointer;
  outline: none;
  display: flex;
  justify-content: space-between;
  align-items: center;

  :hover {
    box-shadow: 0px 0px 25px rgba(148, 174, 213, 0.5);
    transition: .3s all ease;
  }
`

const PostWrapper = styled.div`
  display: flex;
  background: #FEFEFE;
  border-radius: 15px;
  margin-top: 50px;
  height: fit-content;
  position: relative;
`

const PostItem = styled.div`
  display: flex;
  flex-direction: column;
  flex: 0 0 50%;
  justify-content: center;
  padding: 35px;
`

const PostTitle = styled.h1`
  font-style: normal;
  font-weight: 500;
  font-size: 24px;
  line-height: 28px;
  color: #3260A1;
  margin-bottom: 25px;
`

const PostText = styled.p`
  font-style: normal;
  font-weight: 300;
  font-size: 18px;
  line-height: 21px;
  color: #000000;
`

const RemovePostBtn = styled.p`
  font-style: normal;
  font-weight: 300;
  font-size: 14px;
  line-height: 16px;
  color: #FFFFFF;
  background: #EB5050;
  box-shadow: 0px 10px 25px rgba(148, 174, 213, 0.15);
  border-radius: 10px;
  padding: 5px 13px;
  position: absolute;
  left: 50%;
  bottom: -25px;
  transform: translate(-50%);
  cursor: pointer;
`

const Post = () => {
  const router = useRouter()
  const postSlug = router?.query?.id
  const [deletePost] = useMutation(DELETE_POST)
  const { loading, data } = useQuery(GET_ONE_POST, {
    variables: {
      postSlug
    }
  })

  const removePost = async () => {
    try {
      await deletePost({
        variables: {
          postSlug
        }
      })
      .then(() => router.push('/'))
    } catch (error) {
      console.log('Add post error on client >>', error)
    }
  }

  if (loading) return <h2>Loading ...</h2>

  const description = data?.getPost?.text?.substr(0, 150).trim()

  return (
    <ContentWrapper>
      <Head>
        <title>{data?.getPost?.title}</title>
        <meta name="description" content={description} />
        <meta property="og:title" content={data?.getPost?.title} key="title" />
        <meta property="og:description" content={description} key="description" />
      </Head>
      <Navbar />

      <Container>
        <Link href='/'>
          <BackBtn>
            <Image
              src="/static/images/arrow.svg"
              alt="Arrow"
              width={24}
              height={15}
            />
            Назад
          </BackBtn>
        </Link>

        <PostWrapper>
          <PostItem>
            <PostTitle>{data?.getPost?.title}</PostTitle>
            <PostText>
              {data?.getPost?.text}
            </PostText>
          </PostItem>

          <PostItem>
            <Image
              src={data?.getPost?.imgUrl}
              alt={data?.getPost?.title}
              width={540}
              height={316}
            />
          </PostItem>

          <RemovePostBtn onClick={removePost}>Удалить статью</RemovePostBtn>
        </PostWrapper>

      </Container>

    </ContentWrapper>
  )
}

export default Post