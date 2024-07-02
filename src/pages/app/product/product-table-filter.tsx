import { PlusCircle, Search, X } from 'lucide-react'

import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select'
import { Dialog, DialogTrigger } from '@/components/ui/dialog'
import { ProductCreation } from './product-creation'

export function ProductTableFilters() {
  return (
    <form className="flex items-center gap-2">
      <span className="text-sm font-semibold">Filtros:</span>
      <Input placeholder="ID do produto" className="h-8 w-auto" />
      <Input placeholder="Nome do produto" className="h-8 w-[320px]" />
      <Select defaultValue="all">
        <SelectTrigger className="h-8 w-[180px]">
          <SelectValue />
        </SelectTrigger>
        <SelectContent>
          <SelectItem value="all">Todos os tipos</SelectItem>
          {/* <SelectItem value="fruits">Frutas</SelectItem>
          <SelectItem value="cereal">Cereais</SelectItem>
          <SelectItem value="vegetables">Vegetais</SelectItem>
          <SelectItem value="delivering">Leguminosas</SelectItem>
          <SelectItem value="delivered">Raízes</SelectItem> */}
        </SelectContent>
      </Select>
      <Button variant="secondary" size="xs" type="submit">
        <Search className="mr-2 h-4 w-4" />
        Filtrar resultados
      </Button>
      <Button variant="outline" size="xs" type="button">
        <X className="mr-2 h-4 w-4" />
        Remover filtros
      </Button>
      <Dialog>
        <DialogTrigger asChild>
          <Button className="ml-auto text-white" size="xs" type="button">
            <PlusCircle className="mr-2 h-4 w-4" />
            Adicionar produto
          </Button>
        </DialogTrigger>

        <ProductCreation />
      </Dialog>
    </form>
  )
}
