import './MetadataTiles.css';

interface MetadataItem {
  label: string;
  value: string;
}

export function MetadataTiles({ items }: { items: MetadataItem[] }) {
  return (
    <dl className="metadata-tiles">
      {items.map((item) => (
        <div className="metadata-tiles__item" key={item.label}>
          <dt>{item.label}</dt>
          <dd>{item.value}</dd>
        </div>
      ))}
    </dl>
  );
}
