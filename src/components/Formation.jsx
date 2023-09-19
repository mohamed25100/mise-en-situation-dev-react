
import React from 'react'

export const Formation = ({formation}) => {
    const nameClass = "py-2 px-10 hover:text-pink-700 shadow-sm shadow-black hover:bg-pink-300 first-letter"

  return (
    <>
        
        <div className="flex justify-center">
            <table className="border-collapse table-fixed w-full">
                <thead className="bg-pink-700">
                    <tr>
                        <th className="border-b border-pink-700 p-4 pl-8">Nom Formation</th>
                        {/* foreach cours */}
                    </tr>
                </thead>
                <tbody className="bg-pink-300">
                    {
                        formation.map((item, index) => (
                            <tr key={item.id}>
                                <td className="border-b border-pink-700 p-4 pl-8 text-black text-center">{item.nomFormation}</td>
                            </tr>
                        ))

                    }

                </tbody>
            </table>
        </div>
    </>
  )
}
