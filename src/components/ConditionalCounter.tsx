export default function ConditionalCounter({
	count,
}: {
	count: number;
}) {
	if(!count) {
    return null
  }

  return <div>{count} is greater than 0 :)</div>
}
