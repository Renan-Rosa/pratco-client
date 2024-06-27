export type ProductStatus =
  | 'verdura'
  | 'vegetal'
  | 'tempero'
  | 'frios'
  | 'fruta'

interface ProductStatusProps {
  status: ProductStatus
}

const productStatusMap: Record<ProductStatus, string> = {
  verdura: 'Verdura',
  vegetal: 'Vegetal',
  fruta: 'Fruta',
  frios: 'Frios',
  tempero: 'Temperos',
}

export function ProductStatus({ status }: ProductStatusProps) {
  return (
    <div className="flex items-center gap-2">
      {status === 'verdura' && (
        <span className="h-2 w-2 rounded-full bg-slate-400" />
      )}

      {status === 'vegetal' && (
        <span className="h-2 w-2 rounded-full bg-rose-500" />
      )}

      {status === 'fruta' && (
        <span className="h-2 w-2 rounded-full bg-emerald-500" />
      )}

      {['tempero', 'frios'].includes(status) && (
        <span className="h-2 w-2 rounded-full bg-amber-500" />
      )}

      <span className="font-medium text-muted-foreground">
        {productStatusMap[status]}
      </span>
    </div>
  )
}
