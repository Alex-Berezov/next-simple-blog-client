import Head from 'next/head'
import Navbar from '../../components/Navbar/Navbar'
import styled from 'styled-components'
import Link from 'next/link'
import Image from 'next/image'

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

export default function Post() {
  return (
    <ContentWrapper>
      <Head>
        <title>Post page</title>
      </Head>
      <Navbar />

      <div className="container">
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
            <PostTitle>Альпы.  Покори вершину с нами!</PostTitle>
            <PostText>
              А́льпы (фр. Alpes, нем. Alpen, итал. Alpi, романш. Alps, словен. Alpe) — самый высокий и протяжённый горный хребет среди систем, целиком лежащих в Европе. При этом Кавказские горы выше, а Уральские — протяжённей, но они лежат также и на территории Азии (в зависимости от выбранного определения границы между Европой и Азией).

Альпы представляют собой сложную систему хребтов и массивов, протянувшуюся выпуклой к северо-западу дугой от Лигурийского моря до Среднедунайской низменности. Альпы располагаются на территории 8 стран: Франции, Монако, Италии, Швейцарии, Германии, Австрии, Лихтенштейна и Словении. Общая длина альпийской дуги составляет около 1200 км (по внутреннему краю дуги — около 750 км), ширина — до 260 км. Самой высокой вершиной Альп является гора Монблан высотой 4810 метров над уровнем моря, расположенная на границе Франции и Италии[1]. Всего в Альпах сосредоточено около 100 вершин-четырёхтысячников[2].
            </PostText>
          </PostItem>

          <PostItem>
            <Image
              src="/static/images/post1.png"
              alt="Pic 1"
              width={540}
              height={316}
            />
          </PostItem>

          <RemovePostBtn>Удалить статью</RemovePostBtn>
        </PostWrapper>

      </div>

    </ContentWrapper>
  )
}