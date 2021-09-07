import * as S from './style'
import Button from "../buttonBlue"
import Select from "react-select"

const FormCadastro = () => {
const especie = [   { value: 'cachorro', label: 'Cachorro' },   { value: 'gato', label: 'Gato' },   { value: 'outros', label: 'Outros' } ]
const porte = [   { value: 'pequeno', label: 'Pequeno' },   { value: 'médio', label: 'Médio' },   { value: 'grande', label: 'Grande' } ]
const idade = [   { value: 'menor1', label: 'Menos de 1 ano' },   { value: 'um', label: '1 ano' },   { value: 'dois', label: '2 anos' },   { value: 'tres', label: '3 anos' },   { value: 'quatro', label: '4 anos' },   { value: 'cinco', label: '5 anos' },   { value: 'seis', label: '6 anos' },   { value: 'sete', label: '7 anos' },   { value: 'oito', label: '8 anos' },   { value: 'maior', label: '9 anos ou mais' },   { value: 'naoSei', label: 'Não sei informar' } ]
const local = [   { value: 'df', label: 'DF - Distrito Federal' },   { value: 'ac', label: 'AC - Acre' },   { value: 'ap', label: 'AP - Amapá' },   { value: 'am', label: 'AM - Amazonas' },   { value: 'pa', label: 'PA - Pará' },   { value: 'ro', label: 'RO - Rondônia' },   { value: 'rr', label: 'RR - Roraima' },   { value: 'to', label: 'TO - Tocantins' },   { value: 'al', label: 'AL - Alagoas' },   { value: 'ba', label: 'BA - Bahia' },   { value: 'ce', label: 'CE - Ceará' },   { value: 'ma', label: 'MA - Maranhão' },   { value: 'pb', label: 'PB - Paraíba' },   { value: 'pe', label: 'PE - Pernambuco' },   { value: 'pi', label: 'PI - Piauí' },   { value: 'rn', label: 'RN - Rio Grande do Norte' },   { value: 'se', label: 'SE - Sergipe' },   { value: 'es', label: 'ES - Espírito Santo' },   { value: 'mg', label: 'MG - Minas Gerais' },   { value: 'rj', label: 'RJ - Rio de Janeiro' },   { value: 'sp', label: 'SP - São Paulo' },   { value: 'pr', label: 'PR - Paraná' },   { value: 'rs', label: 'RS - Rio Grande do Sul' },   { value: 'sc', label: 'SC - Santa Catarina' },   { value: 'go', label: 'GO - Goiás' },   { value: 'mt', label: 'MT - Mato Grosso' },   { value: 'ms', label: 'MS - Mato Grosso do Sul' } ]
const options = [   { value: '', label: 'Espécie' },   { value: '', label: 'Porte' },   { value: '', label: 'Idade' },   { value: '', label: 'Local' } ]  

  return ( 

  <S.Conteiner>
    <S.Title>Cadastre o pet para adoção</S.Title>

    <input type="" />
    <S.Containerselect> 
        <>
        <Select className="select" defaultValue={options[0]} options={especie}/> 
        <Select className="select" defaultValue={options[1]} options={porte}/> 
        <Select className="select" defaultValue={options[2]} options={idade}/> 
        </>
        <>
        <Select className="select" defaultValue={options[3]} options={local}/>
        {/* <S.Imput type="text"/> */}
        </>
    </S.Containerselect>
        <S.Imput className="sobre" type="text" />

    
    <Button style={{padding: "20px 45px"}}>Confirmar Pet </Button>

  </S.Conteiner>


 ) 
}

export default FormCadastro