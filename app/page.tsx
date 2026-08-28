'use client'

import { BarChart, ResponsiveContainer } from "recharts";

const data = [
    {
        name: 'Revenus',
        value: '2000',
    },
    {
        name: 'Dépenses',
        value: '3000',
    }
]

export default function Home() {
    return (
        <div>
            <ResponsiveContainer>
                <BarChart
                    layout="vertical"
                    data={[
                        { x: "Dépenses", y: 2000 },
                        { x: "Revenus", y: 2500 },
                    ]}
                />
            </ResponsiveContainer>
        </div>
    );
}
