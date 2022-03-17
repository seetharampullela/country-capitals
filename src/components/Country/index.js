const Country = props => {
  const {country} = props
  const {id, capitalDisplayText} = country

  return <option value={id}>{capitalDisplayText}</option>
}
export default Country
