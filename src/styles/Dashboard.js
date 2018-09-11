import styled from 'tachyons-components'

export const Wrapper = styled('div')`
  flex sans-serif
`;
export const Sidebar = styled('nav')`
  flex flex-column
  self-start
  vh-100
  bg-orange
  pa3 ttu
  side-w
`;
export const Anchor = styled('a')`
  link no-underline
  pa3
  white f6
  navbar-links
`;

export const Logodiv = styled('div')`
  dtc v-mid mid-gray 
  link dim w-25
  h4 pl4
`;
export const Logout = styled('button')`
  white bg-transparent
  h2 w-10 ttu bw0 mt3
`;
export const MainContainer = styled('div')`
  flex flex-column
  w-100
  bg-light-grey
`;

export const MainContainer1 = styled('div')`
  flex justify-around
  bg-light-gray
  h-100
  pa4
`;

export const Nav = styled('div')`
  flex justify-end
  self-end
  w-100
  nav-h
  bg-navy
  tl-ns
`;

//for profile on dashboard
export const Container = styled('div')`
  flex flex-column 
  items-center 
  bg-black-20 ba b--light-gray br3
  pl5 pr5 pb2
  shadow-1
  vh-75
`;

export const Avatar = styled('img')`
  pa4 tc
  br-100 h4 w4 dib
`;
