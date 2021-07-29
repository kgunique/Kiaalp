import React from 'react'
import { CFooter } from '@coreui/react'

const TheFooter = () => {
  return (
    <CFooter fixed={false}>
      <div>
        <span className="ml-1">Copyright &copy; 2021. All Right Reserved. Template By Colorlib</span>
      </div>
      <div className="mfs-auto">
        {/* <span className="mr-1">Template By Colorlib</span> */}
        {/* <a href="https://coreui.io/react" target="_blank" rel="noopener noreferrer">oreUI for React</a> */}
      </div>
    </CFooter>
  )
}

export default React.memo(TheFooter)
