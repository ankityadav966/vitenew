import React, { useEffect, useState } from 'react'
import { useRecoilValue } from 'recoil'
import { apiSelector } from './selector/dashboard.selector'

const Index = () => {
   const data = useRecoilValue(apiSelector)
  return (
    <div>
            <div>
      <h1 className='text-center'>To Do </h1>
      <table class="table">
        <thead>
          <tr>
            <th scope="col">Sr.No</th>
            <th scope="col">First</th>
            <th scope="col">Last</th> 
          </tr>
        </thead>
        <tbody>
          {
            data?.map((i, index) => {
              return (
                <>
                  <tr>
                    <th scope="row">{index+1}</th>
                    <td>{i.title}</td>
                    <td>{i.completed?"false":"True"}</td> 
                  </tr>
                </>
              )
            })
          }

        </tbody>
      </table>

    </div>
    </div>
  )
}

export default Index