import Link from 'next/link'

export function TopHeader() {
    return (
      <>
        <Title 
        headerContent={'test'}
        />
      </>
    )
  }

function Title({headerContent}) {
  return (
      <h1>Kyle Armstrong: {headerContent}</h1>
    )
  }