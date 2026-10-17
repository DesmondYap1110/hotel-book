<?php

namespace App\Datatables\Core;

/**
 * Row buttons for an actions() column:
 *
 *   'action' => $this->actions()
 *       ->view(route('admin.room-types.show', $type))
 *       ->edit(route('admin.room-types.edit', $type))
 *       ->delete(route('admin.room-facilities.destroy', $facility)),
 *
 * The Vue table renders them as round icon buttons. delete() asks for
 * confirmation, sends an AJAX DELETE, then reloads the table.
 */
class Actions implements \JsonSerializable
{
    private array $buttons = [];

    public function link(string $url, string $icon, string $title, string $variant = 'primary'): static
    {
        $this->buttons[] = compact('url', 'icon', 'title', 'variant') + ['type' => 'link'];

        return $this;
    }

    public function view(string $url): static
    {
        return $this->link($url, 'fas fa-eye', 'View', 'dark');
    }

    public function edit(string $url): static
    {
        return $this->link($url, 'fas fa-pen', 'Edit');
    }

    /** $name is shown in the confirm box, e.g. "Delete Hair dryer?" */
    public function delete(string $url, string $name = 'this item'): static
    {
        $this->buttons[] = [
            'type'    => 'delete',
            'url'     => $url,
            'icon'    => 'fas fa-trash',
            'title'   => 'Delete',
            'variant' => 'soft-danger',
            'confirm' => "Delete {$name}?",
        ];

        return $this;
    }

    public function jsonSerialize(): array
    {
        return $this->buttons;
    }
}
