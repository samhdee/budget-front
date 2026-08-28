const data = [
    {
        amount: -157.60,
        occurred_at: '26/07/2026',
        type: 'CB',
        beneficiary: 'CULTURA',
        category: 'Loisirs',
        labels: ['Arts & crafts'],
        recurring: true
    },
    {
        amount: -23.98,
        occurred_at: '25/07/2026',
        type: 'CB',
        beneficiary: 'Paypal',
        category: 'Loisirs',
        labels: ['Restauration'],
        recurring: false
    },
    {
        amount: 200,
        occurred_at: '24/07/2026',
        type: 'Chèque',
        beneficiary: '',
        category: 'Revenus',
        labels: [],
        recurring: false
    },
    {
        amount: -87.54,
        occurred_at: '23/07/2026',
        type: 'Virement',
        beneficiary: 'Floriane Claver',
        category: 'Loisirs',
        labels: ['Sortie'],
        recurring: false
    },
    {
        amount: -70,
        occurred_at: '22/07/2026',
        type: 'Virement permanent',
        beneficiary: 'M. Samaël Dhaleine',
        category: 'Épargne',
        labels: [],
        recurring: true
    }
]

export default function Transactions() {
    return (
        <>
            <table className="table table-bordered">
                <thead>
                    <tr>
                        <th>Date</th>
                        <th>Montant</th>
                        <th>Type</th>
                        <th>Bénéficiaire</th>
                        <th>Catégorie</th>
                        <th>Labels</th>
                        <th>Récurrent</th>
                        <th></th>
                    </tr>
                </thead>

                <tbody>
                    {data.map((row, index) => (
                        <tr key={index}>
                            <td>{row.occurred_at}</td>
                            <td>{row.amount}</td>
                            <td>{row.type}</td>
                            <td>{row.beneficiary}</td>
                            <td>{row.category}</td>
                            <td>{row.labels.join(', ')}</td>
                            <td>{row.recurring && 'Oui'}</td>
                            <td>
                                <button></button>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </>
    )
}