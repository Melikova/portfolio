<?php

declare(strict_types=1);

namespace App\Domain\User;

interface UserRepository
{ 
    public function findAll(): array;
    public function findUserOfId(int $id): User;
}
