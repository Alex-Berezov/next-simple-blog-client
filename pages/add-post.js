import Head from 'next/head'
import Navbar from '../components/Navbar/Navbar'
import styled from 'styled-components'
import Link from 'next/link'
import Image from 'next/image'
import { useState } from 'react'
import axios from 'axios'
import { useRouter } from 'next/router'

const Container = styled.div`
  max-width: 1110px;
  width: 100%;
  margin: 0 auto;
`

const ContentWrapper = styled.div`
  background: #EEF5FF;
  min-height: 100vh;
  width: 100%;
`

const AddPostWrapper = styled.div`
  margin-top: 30px;
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

const FormWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`

const Form = styled.form`
  background: #FFFFFF;
  border-radius: 15px;
  padding: 30px;
  max-width: 500px;
  width: 100%;
`

const InputField = styled.div`
  display: flex;
  flex-direction: column;
  margin-bottom: 15px;
`

const TextLabel = styled.div`
  font-style: normal;
  font-weight: 300;
  font-size: 18px;
  line-height: 21px;
  color: #222222;
  margin-bottom: 5px;
`

const Input = styled.input`
  width: 100%;
  display: flex;
  border: 1px solid #E5E5E5;
  border-radius: 5px;
  box-sizing: border-box;
  outline: none;
  padding: 5px 10px;
`

const TextArea = styled.textarea`
  width: 100%;
  display: flex;
  border: 1px solid #E5E5E5;
  border-radius: 5px;
  box-sizing: border-box;
  outline: none;
  padding: 5px 10px;
  min-height: 150px;
  resize: none;
`

const FormBtn = styled.button`
  display: flex;
  margin: 30px auto 0 auto;
  padding: 9px 38px;
  background: #67BFFF;
  box-shadow: 0px 10px 25px rgba(148, 174, 213, 0.15);
  border: none;
  border-radius: 10px;
  font-style: normal;
  font-weight: 300;
  font-size: 14px;
  line-height: 16px;
  text-align: center;
  color: #FFFFFF;
  cursor: pointer;

  :hover {
    box-shadow: 0px 0px 25px rgba(148, 174, 213, 0.5);
    transition: .3s all ease;
  }
`

const AddPost = () => {
  const [title, setTitle] = useState('')
  const [text, setText] = useState('')
  const [imgUrl, setImgUrl] = useState('')
  const router = useRouter()

  const addPost = async () => {
    try {
      await axios.post('http://localhost:5000/api/post/add', {
        title, text, imgUrl
      })
      .then(() => router.push('/'))
    } catch (error) {
      console.log('Add post error on client >>', error)
    }
  }

  return (
    <ContentWrapper>
      <Head>
        <title>Add post</title>
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

        <FormWrapper>
          <Form onSubmit={e => e.preventDefault()}>
            <InputField>
              <TextLabel>Название статьи:</TextLabel>
              <Input onChange={e => setTitle(e.target.value)} />
            </InputField>

            <InputField>
              <TextLabel>Текст статьи:</TextLabel>
              <TextArea onChange={e => setText(e.target.value)} />
            </InputField>

            <InputField>
              <TextLabel>URL картинки:</TextLabel>
              <Input onChange={e => setImgUrl(e.target.value)} />
            </InputField>

            <FormBtn onClick={addPost}>Добавить</FormBtn>
          </Form>
        </FormWrapper>
      </Container>

    </ContentWrapper>
  )
}

export default AddPost