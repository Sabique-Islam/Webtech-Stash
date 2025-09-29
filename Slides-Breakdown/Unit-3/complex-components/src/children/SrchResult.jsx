import ResImage from './ResImage'
import ResCaption from './ResCaption'
import ResLink from './ResLink'

function SrchResult() {
  return (
    <div>
      <h2>Search Results</h2>
      <ul>
        <li>
          <ResImage />
          <ResCaption />
          <ResLink />
        </li>
      </ul>
    </div>
  )
}

export default SrchResult
