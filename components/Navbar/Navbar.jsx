import styled from 'styled-components'
import Link from 'next/link'

const Nav = styled.nav`
  background: #FEFEFE;
  padding: 17px 0;
`

const NavbarItem = styled.div`
  position: relative;
`

const Logo = styled.p`
  font-style: normal;
  font-weight: 500;
  font-size: 18px;
  line-height: 21px;
  color: #3260A1;
  cursor: pointer;
`

const AddPostBtn = styled.p`
  font-style: normal;
  font-weight: 300;
  font-size: 14px;
  line-height: 16px;
  color: #FFFFFF;
  background: #67BFFF;
  box-shadow: 0px 10px 25px rgba(148, 174, 213, 0.15);
  border-radius: 10px;
  padding: 5px 13px;
  position: absolute;
  left: 50%;
  top: 25px;
  transform: translate(-50%);
  cursor: pointer;
`

const Navbar = () => {
  return (
    <Nav>
      <div className='container'>
        <NavbarItem>
          <Link href="/">
            <Logo>NEXT | BLOG</Logo>
          </Link>
          <AddPostBtn>
            <Link href="/add-post">Добавить статью</Link>
          </AddPostBtn>
        </NavbarItem>
      </div>
    </Nav>
  )
}

export default Navbar;