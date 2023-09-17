import styled from "styled-components";

export const Container = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 1px;
  padding: 25px;
`

export const Coluna = styled.div`
  border: none;
  border-radius: 8px;
  padding: 10px;
  min-height: 100vh;
  background-color:#EAEAEA;
  margin-left: 15px;
;
`

export const Box = styled.div`
  border: 1px solid #ddd;
  background-color: #fff;
  padding: 10px;
  margin-bottom: 1px;
  border-radius: 4px;
`
export const CardTitle = styled.h3`
    font-weight: bolder;
  
`
export const TituloColum = styled.h1`
    color:#3A72F8;
`