
import React from 'react'
import Link from 'next/link'
import StudentInfo from './StudentInfo/page'

export default function Home() {
  return (
    <main className="Home">
    <h2>CPRG 306: Web Development 2 - Project</h2>
    <StudentInfo />
    <Link href="/SkillSharing">
      Skill Sharing
    </Link><br></br>
    </main>
  )
}
