<?php namespace Crip\Filesys\App;

use Crip\Core\Contracts\ICripObject;
use Crip\Filesys\Services\Blob;
use Crip\Filesys\Services\FileInfo;
use Crip\Filesys\Services\FilesystemManager;
use Illuminate\Contracts\Support\Arrayable;
use Illuminate\Filesystem\Filesystem;

/**
 * Class File
 * @package Crip\Filesys\App
 */
class File extends FileSystemObject implements ICripObject, Arrayable
{
    public $name = '';
    public $extension = '';
    public $mime = '';
    public $type = '';
    public $mimetype = '';
    public $bytes = '';
    public $updated_at = '';
    public $thumb = '';
    public $dir = '';
    public $full_name = '';
    public $url = '';
    public $size = [];
    public $thumbs = [];

    public function __construct(Blob $blob = null)
    {
        /** @var Filesystem $fs */
        $fs = app(Filesystem::class);

        if ($blob !== null) {
            $this->name = $blob->file->getName();
            $this->extension = $blob->file->getExt();
            $this->type = $fs->type($blob->systemPath());
            $this->mimetype = $blob->file->getMimeType();
            // $this->mime = resolve from config.mime.type
            $this->bytes = $fs->size($blob->systemPath());
            $this->updated_at = $fs->lastModified($blob->systemPath());
            // $this->thumb = resolve default thumb from a type or image for images
            $this->dir = $blob->folder->getPath();
            $this->full_name = $blob->file->getFullName();
            $this->url = $blob->file->getUrl();
        }
    }
}