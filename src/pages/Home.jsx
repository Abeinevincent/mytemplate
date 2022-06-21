import styled from 'styled-components'
const Wrapper = styled.div``;
const TestDiv = styled.article`
  max-width: 90%;
  margin-right: auto;
  margin-left: auto;
  padding: 1rem;
`;
const HeadingOne = styled.h1`
  margin: 1rem 0;
`;

const Home = () => {
  return (
    <Wrapper>
          <TestDiv>
            <HeadingOne>What is Lorem Ipsum? </HeadingOne>
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry... Template Lorem ipsum dola sit amet Lorem ipsum dolor sit
            amet consectetur adipisicing elit. Dolorem tenetur omnis soluta
            neque fuga dignissimos dolor reprehenderit ullam, voluptates aperiam
            sequi animi placeat dicta. Facilis dolores cumque dolorum ex
            numquam. Lorem Ipsum is simply dummy text of the printing and
            typesetting industry... Template Lorem ipsum dola sit amet Lorem
            ipsum dolor sit amet consectetur adipisicing elit. Dolorem tenetur
            omnis soluta neque fuga dignissimos dolor reprehenderit ullam,
            voluptates aperiam sequi animi placeat dicta. Facilis dolores cumque
            dolorum ex numquam. Lorem Ipsum is simply dummy text of the printing
            and typesetting industry... Template Lorem ipsum dola sit amet Lorem
            ipsum dolor sit amet consectetur adipisicing elit. Dolorem tenetur
            omnis soluta neque fuga dignissimos dolor reprehenderit ullam,
            voluptates aperiam sequi animi placeat dicta. Facilis dolores cumque
            dolorum ex numquam.
          </TestDiv>
        </Wrapper>
  )
}

export default Home
