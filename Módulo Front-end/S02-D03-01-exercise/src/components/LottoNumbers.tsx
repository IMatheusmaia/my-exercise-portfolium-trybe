function LottoNumbers( { numbers }: { numbers: number[]} ) {
    return (
        <>
          <h3>Os números sorteados são:</h3>
          <ul>
            { (numbers.length === 6)? ( numbers.map((number) => <li> {number} </li>) ) : <p> Erro: a lista não contém 6 números </p> }
          </ul>
        </>
    );
}

export default LottoNumbers;