import { useTranslation } from "react-i18next"
import { MouseEvent, useState } from "react"
import copy from "copy-to-clipboard"

import { clx, toast, Tooltip } from "@medusajs/ui"

type DisplayIdProps = {
  id: string
  className?: string
}

function DisplayId({ id, className }: DisplayIdProps) {
  const { t } = useTranslation()
  const [open, setOpen] = useState(false)

  const onClick = (e: MouseEvent<HTMLButtonElement>) => {
    e.stopPropagation()
    copy(id)
    toast.success(t("actions.idCopiedToClipboard"))
  }

  return (
    <Tooltip maxWidth={260} content={id} open={open} onOpenChange={setOpen}>
      <button
        type="button"
        onClick={onClick}
        aria-label={t("actions.copyId")}
        className={clx(
          "transition-fg hover:text-ui-fg-subtle focus-visible:text-ui-fg-interactive outline-none",
          className
        )}
      >
        #{id.slice(-7)}
      </button>
    </Tooltip>
  )
}

export default DisplayId
