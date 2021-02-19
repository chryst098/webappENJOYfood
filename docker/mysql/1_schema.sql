drop table if exists place_infor;
create table place_infor
(
    id                  bigint unsigned auto_increment primary key,
    place_type_id       int          not null,
    place_name          varchar(255) not null,
    place_location_name varchar(255) not null,
    place_lat           varchar(255) not null,
    place_long          varchar(255) not null,
    total_seats         int          not null,
    available_am        varchar(255) not null,
    available_pm        varchar(255) not null,
    famous_food         varchar(255) not null,
    introduction        varchar(2000)  not null,
    rating_star         decimal(2, 1) not null,
    total_view          int          not null,
    image               varchar(255),
    value               tinyint(1)    not null
) collate = utf8mb4_unicode_ci
;

drop table if exists register_detail;
create table register_detail
(
    id            bigint unsigned auto_increment primary key,
    place_id      bigint unsigned not null,
    table_number  int          not null,
    time_register varchar(255) not null,
    total_peoples int          not null,
    phone_number  varchar(255) not null,
    created_at    timestamp    not null default current_timestamp,
    updated_at    timestamp    not null default current_timestamp,
    foreign key (place_id) references place_infor(id)
) collate = utf8mb4_unicode_ci
;

drop table if exists users;
create table users
(
    id                bigint unsigned auto_increment primary key,
    name              varchar(255)         not null,
    username          varchar(255)         not null,
    email             varchar(255)         not null,
    email_verified_at timestamp            null,
    password          varchar(255)         not null,
    phone             varchar(255)         not null,
    address           varchar(255)         null,
    agree_term        tinyint(1) default 0 not null,
    avatar            varchar(255)         null,
    provider          varchar(20)          null,
    provider_id       varchar(255)         null,
    access_token      varchar(255)         null,
    remember_token    varchar(100)         null,
    created_at        timestamp            null default current_timestamp,
    updated_at        timestamp            null default current_timestamp,
    constraint users_email_unique
        unique (email),
    constraint users_username_unique
        unique (username)
) collate = utf8mb4_unicode_ci
;